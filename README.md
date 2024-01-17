# careWallet

Before you Create the ios build

### Replace this line:

## References:

https://stackoverflow.com/questions/77738285/how-can-i-get-past-installing-boost-with-react-native-environment-setup-for-ios

## Solution:

Path: node_modules/react-native/third-party-podspecs. In boost.podspec, only change the line
spec.source = { :http => 'https://boostorg.jfrog.io/artifactory/main/release/1.83.0/source/boost_1_83_0.tar.bz2',
:sha256 => '6478edfe2f3305127cffe8caf73ea0176c53769f4bf1585be237eb30798c3b8e' }

to this:
spec.source = { :http => 'https://sourceforge.net/projects/boost/files/boost/1.83.0/boost_1_83_0.tar.bz2',
:sha256 => '6478edfe2f3305127cffe8caf73ea0176c53769f4bf1585be237eb30798c3b8e' }

## Then run this command:

npx expo run:android && npx expo run:ios
https://docs.expo.dev/workflow/customizing/

Please add this line in the info.plist file for the camera to work:

<key>NSCameraUsageDescription</key>
<string>Allow access to your camera to take pictures</string>
