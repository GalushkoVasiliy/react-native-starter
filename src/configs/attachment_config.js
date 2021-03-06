// @flow


export const IMAGE_TYPES = {
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpg",
  ".png": "image/png",
  ".gif": "image/gif",
};

export const FILE_TYPES = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
  ".ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".xls": "application/vnd.ms-excel",
  ".txt": "text/plain",
  ".rtf": "application/rtf",
};

export const VIDEO_TYPES = {
  ".mpg": "video/mpg",
  ".mpeg": "video/mpeg",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".avi": "video/x-msvideo",
  ".3g2": "video/3gpp2",
  ".3gp": "video/3gpp",
  ".flv": "video/x-flv",
  ".odt": "application/vnd.oasis.opendocument.text",
  ".ogv": "video/ogg",
  ".webm": "video/webm",
};

export const FILE_NAME_EXTENSIONS = {
  /**
   * image mimeTypes
   */
  image: IMAGE_TYPES,
  /**
   * document mimeTypes
   */
  file: FILE_TYPES,
  /**
   * video mimeTypes
   */
  video: VIDEO_TYPES,
};
