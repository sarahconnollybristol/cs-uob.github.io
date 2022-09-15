#!/bin/bash
# e = fail script if any command fails
# u = fail script if reference to any undefined var
set -eu
filename="$1"
port="$2"
arm-none-eabi-as -o "$filename".o -g "$filename".s
arm-none-eabi-ld -o "$filename" "$filename".o
qemu-arm -singlestep -g "$port" "$filename" &
gdb-multiarch -iex "file $filename" -iex "target
remote localhost:$port" -q
