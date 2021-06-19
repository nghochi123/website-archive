# Cheatsheet

A cheatsheet.

### Table of Content
1. Enumeration
2. Gaining Access and Information
3. Escalating Privilege
4. Analysing Information
5. Others

# 1. Enumeration - Recon and Find Entry Points

- nmap (port/version/OS scanning)
- gobuster (fuzzing web directories/files)
- wfuzz (fuzzing directories)
- dirsearch (finding directories)
- sublist3r (finding sub-domains, I don't use)
- [online subdomain finder](https://subdomainfinder.c99.nl/)
- enum4linux (if there's a SMB)
- smbclient (connecting to SMB)
- smbmap (SMB, I don't use)
- impacket (Don't really know how to use)
- burpsuite (web requests hijacking and editting)
- owasp zap (web crawling and vulnerability discovery)
- Wireshark (capture and analyse internet packets)

# 2. Exploiting Vulnerabilities to Gain Access and Information

## BruteForcing Credentials

- hydra (password/username cracking. Bruteforce/wordlist attack)

## Using Already Found Exploits

- [ExploitDB](https://www.exploit-db.com/)
- [NVD](https://nvd.nist.gov/vuln/search)
- [CVE](https://cve.mitre.org/)
- Metasploit (msfconsole)

I typically only use Metasploit or search ExploitDB.
Useful when the website is pre-built.

## Reverse shells

Before using a reverse shell, edit the IP address to your local IP address, and the port to a unused port like 1337. Set up a netcat listener to that port. 
[PentestMonkey](http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet) has more information about reverse shells.

### Method 1 - Uploading the file to webserver and runnning it somehow
E.g. If the website has an upload function and we have access (thru gobuster) to their file storage page, upload php reverse shell and run.

**Bypassing filetype filters**

- Client side bypass: Edit page source to allow .php types
- Server side bypass: Use burpsuite to capture filter and edit it. 
- Weirdass bypass: Use alternative .php types such as .php2 .php3 .php4 .php5 .phtml

### Method 2 - Gain access to the target's command line terminal somehow

Usually on special websites with weird inputs or GET/POST request called 'cmd'

[Stabilise reverse shell like this.](https://blog.ropnop.com/upgrading-simple-shells-to-fully-interactive-ttys)

## SQL injections

### Basic login sql queries

These attempt to log you in with simple sql queries. Only works if the sql query is terrible.

- admin' --
- admin' #
- admin'/\*
- ' or 1=1--
- ' or 1=1#
- ' or 1=1/\*
- ') or '1'='1--
- ') or ('1'='1--

If the above does not work, use sqlmap or [other payloads]( https://github.com/payloadbox/sql-injection-payload-list)

## Service-side Request Forgery(SSRF) - Access internal database thru webserver requests

Edit POST request (Burpsuite) to include internal IP addresses (127.0.0.1, localhost, WIN2019SERV.CORP) which are usually not accessible.

Bypass SSRF filter using \*.localtest.com

## Cookie Attack/Forgery

Check developer options -> storage for cookies. 

If the cookie is poorly encrypted and its value corresponds to username/password, we can impersonate admin or other users. 

## Taking a closer look at the website

- curl -X OPTIONS to check available requests and/or get and send cookies.
- Read the HTML and CSS (Ctrl-shift-C, F12 or CTRL-U) to find comments/href/subdirectories.
- Check robots.txt
- Check storage (cookies and localstorage)
- Check debugger for any js files
- Check network tab for any suspicious POST/GET requests
- Test SQLI, XSS if there's a inputbox that causes POST requests

## XML External Entity(XXE)

Exploit this to access files in the server. 

\<\!DOCTYPE foo \[ \<\!ENTITY xxe SYSTEM \"file:///etc/passwd\"\> \]\>


# 3. Privilege Escalation

Once we have access to the machine, we try to privilege escalate. My checking priority is as follows:

- open gtfobins
- sudo -l
- cat /etc/shadow, cat /etc/passwd
- find / -type f -a \( -perm -u+s -o -perm -g+s \) -exec ls -l {} \; 2> /dev/null (to find SUID or SGID bits)
- cat /etc/crontab (finding abusable cronjobs)
- Bringing in linpeas.

Other steps that are possible to check that I don't

- Finding history files for plaintext or hashed password/keys
- NFS
- Kernel exploits

Also, other privesc scripts can be used, I just prefer linpeas because of the cute image at every boot.


# 4. Information Analysis

## Encryption

Sometimes data will be encrypted or encoded. To decode basic forms, we can use [CyberChef](https://gchq.github.io/CyberChef/)

### Basic encryption forms/ Ciphers

- Base 64 - usually has a mix of capital letters, numbers and small letters, and sometimes == at the back. e.g. Y2hpY2tlbiBudWdnZXRz
- Base 32 - usually has only one type of characters (usually small letters) and numbers. Can have ==== at the back. e.g. mnugsy3lmvxca3tvm5twk5dt
- Hex - usually has mix of small characters and numbers (characters up until f) e.g. 63 68 69 63 6b 65 6e 20 6e 75 67 67 65 74 73
- Decimal - all numbers e.g. 99 104 105 99 107 101 110 32 110 117 103 103 101 116 115
- ROT - same number of characters as original. puvpxra ahttrgf
- URL encoded - % followed by numbers in hex.
- Unicode (usually UTF-8) \u followed by 4 or more characters.
- Punycode - starts with 'xn--'. Usually found in website links.
- Other less common ones: Enigma, spam mimic (appears as spam message), zero-width space, morse code

### Hashes

Haiti <hash> to identify hashes and its format code in JtR. 
  
Looking at these [example hashes](https://gist.github.com/dwallraff/6a50b5d2649afeb1803757560c176401) might help.
  
Some hashes have salts in formats such as: hash:salt OR $version$salt$hash

Crack hashes using dictionary attach with hashcat or john the ripper. Look up common hashes with [crackstation](crackstation.net)
  
For wordlists, use rockyou.txt or seclists.

### RSA

Right now, quite a popular encryption method is [RSA encryption](https://muirlandoracle.co.uk/2020/01/29/rsa-encryption/):

If there are many numbers, and decimal doesnt work (or other stuff), we might want to try this.

Basically, what happens is there's a private key and a public key, and our data d.

Public (x, y)

Private (z, y)
  
The first user encrypts our data d with the public key. encrypted = (d^x)%y.

The second user can decrypt this encrypted data doing: d = (encrypted^z)%y.

For the rest I know less about, so I'll just list some of them here:

### SSH Private keys (often .ssh/id_rsa)

If we get access to this, we can use ssh2john and pass the hash into john the ripper to crack the passphrase (if any).
  
Copy the content of the key to the attacking machine and access the target through ssh with the -i flag.

### PGP

Not sure about how to crack this, usually when I find this there's something I can find on exploitDB.

### GPG

gpg2john and john the ripper

### Reverse Engineering

- radare2 (ELF files)
- ILSpy (.NET)
- Dotpeek (.NET)

### Steganography

- steghide (jpegs)
- zsteg (pngs)
- ExifTool (all image files, metadata)
- Stegoveritas (all image files, basically all in one)
- Sonic Visualiser (Analysis of .wav files)
- Try putting the image in a browser and run it as \<script\>  (Polyglot)

## OSINT
  
### Openly Available identities

- [namechk](https://namechk.com/)
- [whatsmyname](https://whatsmyname.app/)
- [namecheckup](https://namecheckup.com/)
- [Sherlock](https://github.com/sherlock-project/sherlock)
- [haveibeenpwned](https://haveibeenpwned.com/)
- [intelx](https://intelx.io/)
- [breach dictionary](https://breachdirectory.tk/)
- [Scylla (under maintainance)](https://scylla.so/)

### Google searching

- site: specify domain name
- filetype: search by file extension
- cache: View google's Cached version of a url
- intitle: phrase must appear in title of page
- inurl: phrase must be in url (eg /cgi-bin)
  
### Domain/website info lookup

[Domain Name Registration Data](https://lookup.icann.org/lookup)

[Internet archive/wayback machine](https://archive.org/)

[DNS info lookup](https://viewdns.info/)

[DNS info dump (if not sure what to look for)](https://dnsdumpster.com/)
  
[online subdomainfinder](https://subdomainfinder.c99.nl/)

Dig command in linux (lookout for [zone transfer](https://digi.ninja/projects/zonetransferme.php) )

### Reverse Index search
  
Yandex/Google/Tineye
  
[Latest street view info](https://www.mapillary.com/)

### Website scraping
  
[spiderfoot](https://github.com/smicallef/spiderfoot.git)

### IOT
  
[shodan](https://www.shodan.io/)
  
[BSSID/SSID lookup (for routers)](https://wigle.net/)

^Both tools require registering before use

### Social media scrapping
  
- theHarvester.py
- sherlock.py
  
### Email tracing
  
[Trace email if you have the full email source](https://www.ip2location.com/free/email-tracer)
  
  
# 5. Other Information/Tools
  
## Networking, file transfer and email

- Wireshark (analyse packets)
- smbclient (to access smb protocols)
- telnet (to access pop3 or other email protocols)
- ftp (to access FTP - file transfer protocols)
  - Sometimes, for FTP, we can login anonymously, so this is abusable.
- mount (allows us to mount ftp or smb things)

## Active Directory

https://gist.github.com/TarlogicSecurity/2f221924fef8c14a1d8e29f3cb5c5c4a
  
## Fixing broken/corrupted files
  
Find the correct [file signature/header](https://www.garykessler.net/library/file_sigs.html) and fix with [hex editor](https://hexed.it/) 
