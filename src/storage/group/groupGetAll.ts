import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    if (storage) {
      return JSON.parse(storage);
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
}
