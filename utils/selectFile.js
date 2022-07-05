import { Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const selectFile = async ({ encodeBase64 = true }) => {
  try {
    const data = await DocumentPicker.getDocumentAsync();

    if (data?.type === 'success') {
      if (encodeBase64) {
        if (Platform.OS === 'web') {
          return data.uri;
        }

        const base64data = await FileSystem.readAsStringAsync(data.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        return 'data:' + data.mimeType + ';base64,' + base64data;
      }

      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export default selectFile;
