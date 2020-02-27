#echo "Updating react-native-dropdownalert"
# cp core/react-native-dropdownalert/DropdownAlert.js node_modules/react-native-dropdownalert/DropdownAlert.js


echo "Updating main App file"
 cp core/App.js App.js

 echo "Updating CNEditor module"
 cp core/index.d.ts node_modules/react-native-cn-richtext-editor/index.d.ts
 cp core/CNEditor.js node_modules/react-native-cn-richtext-editor/src/CNEditor.js
 cp core/editor.html android/app/src/main/assets/editor.html

echo "App.js and node_modules updated"
