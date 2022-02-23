clc
clear all;
clearinst  %this function detects and closes any open connections
% Initialises the Signal Generator

siggen = visa('ni', 'USB0::0x0957::0x0407::MY43002016::INSTR'); %makes visa object siggen
% Open the connection, now the object is connected to the instrument
% Initialises the Lock-in Amplifier and microphone

lockin = gpib('ni',0,7); %makes a GPIB object reads it froma location 0, 7. Make sure this location is correct

% Open the connection
fopen(lockin);
fopen(siggen);

set(lockin, 'EOSMode','read')
set(lockin,'EOSCharcode','LF');

it = 200;
wavelength = linspace(400,500,it);

for w = 1:it 
    fprintf(siggen, ['APPL:SIN ',num2str(wavelength(w)),' HZ, 3.0 VPP, 0 V'])
    pause(1.5);
    fprintf(lockin,['OUTP? 3']) %lets the lock in amplifier know to start recording the Y-Axis, NOTE: if OUTP? 1 was used x axis will be recorded
    %output 3 records R so that should be actual signal
    y(w) = str2num(fscanf(lockin)); %converts char to num
    
end

fprintf(siggen, 'APPL:SIN 0 KHZ, 3.0 VPP, 0 V')

fclose(siggen); delete(siggen);
fclose(lockin); 

plot(wavelength,y,'b*');
xlabel("Frequency (Hz)")
ylabel("Amplitude (V)")
hold on
plot(wavelength,y,'r-');
hold off


