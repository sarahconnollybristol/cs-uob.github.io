# VirtualBox in Windows

### VirtualBox:

##### 1. Download and install VirtualBox (select "Windows hosts"):
https://www.virtualbox.org/wiki/Downloads

![](Images/Win-VB/vb_site.png)

##### 2. Download Ubuntu (we are just downloading it for now):
https://ubuntu.com/download/desktop

##### 3. Open VirtualBox

##### 4. Select the blue circle star for new

![](Images/Win-VB/vb-new.png)

##### 5. Fill in the details as:
- Name = Ubuntu
- Type = Linux
- Version = Ubuntu (64-bit)

![](Images/Win-VB/vb-deets.png)

##### 6. Next page provide as much RAM as you like (The more you give, the faster the VM will be when it's running but the slower your other programs will run outside the VM)

![](Images/Win-VB/vb-mem.png)

##### 7. Next page select "Create virtual hard disk now"

![](Images/Win-VB/disk-now.png)

##### 8. Next page select "VDI"

![](Images/Win-VB/vdi.png)

##### 9. Next page select "Dynamically allocated"

![](Images/Win-VB/dynamic.png)

##### 10. Next page; toggle the ammount of space you want to reserve for the virtual machine, this can be whatever you like but MUST be >=10GB otherwise the installation won't work.

![](Images/Win-VB/space.png)

##### 11. Start the VM by selecting it in VirtualBox and clicking start

![](Images/Win-VB/start.png)

##### 12. You are prompted to select the startup disk, click on the folder icon with a green bit

![](Images/Win-VB/folder.png)

##### 13. Click "add" to navigate your filesystem for the Ubuntu iso file we downloaded earlier. Select this and click choose.

![](Images/Win-VB/add.png)

##### 14. Now click "start" and the VM will start running

![](Images/Win-VB/start_vm.png)

##### 15. Once the VM has spun up you will see a screen promt to "Try Ubuntu" or "install Ubuntu" - choose install

![](Images/Win-VB/ubuntu%20install/1.png)

##### 16. Choose language


![](Images/Win-VB/ubuntu%20install/2.png)

##### 17. Leave installation type as normal and click continue

![](Images/Win-VB/ubuntu%20install/3.png)

##### 18. Select "Erase Disk and install Ubuntu" - don't worry - this is only wiping the virtual disk and not your actual computer

![](Images/Win-VB/ubuntu%20install/4.png)

##### 19. Click "install now"

##### 20. Click "continue" on the prompt

##### 21. Select time zone

![](Images/Win-VB/ubuntu%20install/5.png)

##### 22. Fill in name and password and click continue to begin installation (this will take a while)

![](Images/Win-VB/ubuntu%20install/6.png)

![](Images/Win-VB/ubuntu%20install/7.png)

##### 23. Installation complete - click "restart now"

##### 24. You will be prompted to remove the installation medium - press enter

##### 25. The VM will restart

##### 26. You now have a VM running (in a tiny window) - we need to change this

![](Images/Win-VB/ubuntu%20install/8.png)

##### You're done!

### Extra: Adjusting the screen size

##### 1. At the bottom right of the VM there will be a small bit of text which refers to your host key. You need to remember what that is! Mine says "RIGHT ALT". We need to remember this because we need to be able to toggel full screen.

![](Images/Win-VB/ubuntu%20install/9.png)

##### 2. (If you want to change it, go to File -> preferences -> Input and click on the text next to "host key" and press the key you would prefer)

![](Images/Win-VB/ubuntu%20install/10.png)

![](Images/Win-VB/ubuntu%20install/11.png)

##### 3. press your host key with 'F' to go full screen - notice the vm screen size doesn't change

![](Images/Win-VB/ubuntu%20install/12.png)

##### 4. Click on the square grid (bottom left) to see your applciations

![](Images/Win-VB/ubuntu%20install/13.png)

##### 5. Type "settings" in the search bar and open settings (in full screen mode)

![](Images/Win-VB/ubuntu%20install/14.png)

##### 6. Select "Screen Display"

![](Images/Win-VB/ubuntu%20install/15.png)

##### 7. Here, you can change the screen resolution to match your screen (hint: if you can't see the square grid in the bottom left, you've gone too big!)

##### 8. Open a terminal by pressing CTRL+T

![](Images/Win-VB/ubuntu%20install/16.png)

##### 9. run "sudo apt update && sudo apt upgrade && sudo apt install gcc"

##### All done! To exit the VM you can shut it down like a regular PC and start it from VirtualBox.

![](Images/Win-VB/ubuntu%20install/17.png)
