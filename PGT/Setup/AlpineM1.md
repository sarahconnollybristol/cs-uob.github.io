# Install Alpine Linux on Apple Silicon

Got to https://alpinelinux.org/downloads/ and download the virtual option – save it somewhere you can find it later. 

 

Download and open UTM https://mac.getutm.app  

Create a new virtual machine 

![](Images/AlpineM1/create-new-vm.png)

Adjust information in the following tabs and fields 

information – name it alpine 

System – architecture = ARM64 (aarch64) 

Drives – new drive – VirtIO (default) - size 4gb 

Drives – new drive – tick removable – type = USB 

Click save 

 

Select the alpine vm in UTM and see the drop down menu labelled CD/DVD. Select browse from the menu and find the alpine ‘.iso’ file you downloaded earlier. 

 

Click the play button to start the VM 

Inside the VM: 

You will see a localhost login prompt: Type ‘root’ and enter 

Run setup-alpine 

You will be taken through the following setup process: https://wiki.alpinelinux.org/wiki/Alpine_setup_scripts#setup-alpine  

Select Keyboard layout: mine is gb but select the correct one for your machine 

Enter system hostname: Press enter 

Which one do you want to initialize? Press Enter 

Ip address for eth0? Press Enter 

Do you want to do any manual network configuration? Press enter 

New password: (I just left it black and pressed enter) 

Retype password:  

Timezone: type ‘?’ for list of options – UK is GMT 

HTTP/FTP proxy URL? Press Enter 

Enter mirror number: type ‘f’ and Enter – this will take a minute 

Which SSH server? Press Enter 

Which disk(s) would you like to use? - select the available disk. Mine is labelled ‘vda’ so I type that and press enter. 

How would you like to use it? Type ‘sys’ and enter 

WARNING: Erase the above disk(s) and continue? Type ‘y’ and enter 

You should see a message saying Installation complete. Pease reboot 

Type ‘reboot’ and enter 

For some reason, this seems to throw a bunch of errors in UTM. Please ignore these errors and return to the main UTM screen. 

Click the play icon on the alpine VM 

Testing persistent storage: 

Login with the username ‘root’ and the password you just set up (if you left it blank just press enter) 

Type ‘ls’ - nothing should happen because there are no files in your working directory. 

Type ‘touch file’ 

Type ‘ls’ again 

You should now see a file in the current directory 

Shutdown the VM with the command ‘poweroff’ 

Start up the VM again from UTM, login with your username and password, and finally type ‘ls’ again. 

You should see the same file you created earlier. 

 

 
