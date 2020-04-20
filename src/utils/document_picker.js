// @flow


/* REACT */
import { Platform } from "react-native";

/* MODULES */
import { DocumentPicker, DocumentPickerUtil } from "react-native-document-picker";
import OpenFile from "react-native-doc-viewer";

/* CUSTOM MODULES */
import { getType, checkType } from "src/utils/file_helper";
import logger from "src/utils/logger";

export type _t_file = {|
  uri: string,
  fileName: string,
  type: string,
  id?: number,
|};

type _t_res = {|
  type?: string,
  fileName: string,
  uri: string,
  data?: {},
  fileSize: number,
|};

type _t_err = string;

const init = (): Promise<*> => (
  new Promise((resolve: Function) => DocumentPicker.show({
    filetype: [
      DocumentPickerUtil.allFiles()
    ],
  }, (error: _t_err, res: _t_res) => {
    if (error) {
      logger.warn("src/utils/document.picker init error: ", error);
    }
    /**
     * fetching type - can be provided in res by default;
     * if no - parse fileName
     */
    const type = res ? getType(res.fileName) : null;
    if (res && type && checkType(type) && res.uri) {
      resolve({
        ...res,
        type,
      });
    }
  }))
);

const openFile = (data: _t_file) => {
  const { uri, fileName, type } = data;
  if (Platform.OS === "ios" && !!uri) {
    OpenFile.openDoc([{
      url: uri
    }], () => {});
  } else if (Platform.OS === "android" && !!uri && !!fileName && !!type) {
    OpenFile.openDoc([{
      url: uri,
      fileName,
      cache: false,
      fileType: type
    }], (error) => {
      logger.warn("src/utils/document.picker openFile error: ", error);
    });
  }
};

export default {
  init,
  openFile
};
