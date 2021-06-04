# Cheatsheet

A list of some of the important tools I use or follow in trying to hack something.

## Enumeration

- nmap
- gobuster (if there's a port with a webserver)
- wfuzz (finding directories)
- dirsearch (finding directories)
- sublist3r (finding sub-domains, I don't use)
- enum4linux (if there's a SMB present)
- smbclient (SMB)
- smbmap (SMB, I don't use)
- impacket (Don't really know how to use)
- burpsuite
- owasp zap

## BruteForcing

- hydra (password/username cracking. Bruteforce/wordlist attack)
- hashcat (hash cracking with wordlist/bruteforce)
- john the ripper (Alternative to bruteforcing passwords/wordlist attack)

## Already found exploits

- [ExploitDB](https://www.exploit-db.com/)
- [NVD](https://nvd.nist.gov/vuln/search)
- [CVE](https://cve.mitre.org/)
- Nikto (Don't use often)
- Metasploit (msfconsole)

I typically only use Metasploit or search ExploitDB.

## Reverse shells

Before using a reverse shell, edit the IP address to your local IP address, and the port to a unused port like 1337. Set up a netcat listener to that port.

[PentestMonkey](http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet) has more information about reverse shells.

If we are able to upload files, we can upload the php reverse shell then visit the web page.

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

If the above does not work, we can use sqlmap.

## Encryption

Sometimes data will be encrypted or encoded. To decode basic forms, we can use [CyberChef](https://gchq.github.io/CyberChef/)

### Basic encryption forms

- Base 64 - usually has a mix of capital letters, numbers and small letters, and sometimes === at the back. e.g. Y2hpY2tlbiBudWdnZXRz
- Base 32 - usually has only one type of characters (usually small letters) and numbers. e.g. mnugsy3lmvxca3tvm5twk5dt
- Hex - usually has mix of small characters and numbers (characters up until f) e.g. 63 68 69 63 6b 65 6e 20 6e 75 67 67 65 74 73
- Decimal - all numbers e.g. 99 104 105 99 107 101 110 32 110 117 103 103 101 116 115
- ROT - same number of characters as original. puvpxra ahttrgf

### Hashes

Not sure how to identify hashes by sight, but looking at these [example hashes](https://gist.github.com/dwallraff/6a50b5d2649afeb1803757560c176401) might help.

### Others

Right now, quite a popular encryption method is [RSA encryption](https://muirlandoracle.co.uk/2020/01/29/rsa-encryption/):

If there are many numbers, and decimal doesnt work (or other stuff), we might want to try this.

Basically, what happens is there's a private key and a public key, and our data d.

Public (x, y)

Private (z, y)

The first user encrypts our data d with the public key. encrypted = (d^x)%y.

The second user can decrypt this encrypted data doing: d = (encrypted^z)%y.

For the rest I know less about, so I'll just list some of them here:

#### SSH Private keys

If we get access to this, we can use ssh2john and pass the hash into john the ripper to crack.

Then, we can get access to a machine through ssh with the -i flag.

#### PGP

Not sure about how to crack this, usually when I find this there's something I can find on exploitDB.

#### GPG

gpg2john and john the ripper

#### AES

Not sure about this either

## Openly Available identities

- [namechk](https://namechk.com/)
- [whatsmyname](https://whatsmyname.app/)
- [namecheckup](https://namecheckup.com/)
- [Sherlock](https://github.com/sherlock-project/sherlock)
- [haveibeenpwned](https://haveibeenpwned.com/)

## Reverse Engineering

- radare2 (ELF files)
- ILSpy (.NET)
- Dotpeek (.NET)

## Steganography

- steghide (jpegs)
- zsteg (pngs)
- ExifTool (all image files, metadata)
- Stegoveritas (all image files, basically all in one)
- Sonic Visualiser (Analysis of .wav files, not sure about all sound files)

## Web Exploitation Checklist

- Read the HTML and CSS (Ctrl-shift-C, F12 or CTRL-U)
- Check robots.txt
- Check storage (cookies and localstorage)
- Check debugger for any js files
- Check network tab for any suspicious POST/GET requests
- Test SQLI, XSS if there's a inputbox that causes POST requests

## Networking, file transfer and email

- Wireshark (analyse packets)
- smbclient (to access smb protocols)
- telnet (to access pop3 or other email protocols)
- ftp (to access FTP - file transfer protocols)
  - Sometimes, for FTP, we can login anonymously, so this is abusable.
- mount (allows us to mount ftp or smb things)

## Privilege Escalation

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
- Kernel exploits.

Also, other privesc scripts can be used, I just prefer linpeas because of the cute image at every boot.

## OSINT

Google searching:

- site: must have that site at the start of the url
- filetype: search by file extension
- cache: View google's Cached version of a url
- intitle: phrase must appear in title of page

## Active Directory

https://gist.github.com/TarlogicSecurity/2f221924fef8c14a1d8e29f3cb5c5c4a
