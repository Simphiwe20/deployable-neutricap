interface Navigator {
    notification: {
      alert: (message: string, alertCallback: () => void, title?: string, buttonName?: string) => void;
    };
    device: {
      capture: {
        captureVideo: (
          successCallback: (mediaFiles: MediaFile[]) => void,
          errorCallback: (error: CaptureError) => void,
          options?: CaptureVideoOptions
        ) => void;
      };
    };
    camera: {
      getPicture(
        successCallback: (imageData: string) => void,
        errorCallback: (message: string) => void,
        options?: CameraOptions
      ): void;
    }
  }
  
  interface MediaFile {
    // Add properties for MediaFile if needed
    name: string;
    fullPath: string;
    type: string;
    lastModifiedDate: Date;
    size: number;
  }
  
  interface CaptureError {
    code: number;
    message: string;
  }
  
  interface CaptureVideoOptions {
    limit?: number;
    duration?: number;
    quality?: number;
  }
  

  // cordova.d.ts

// interface Navigator {
//   camera: {
//     getPicture(
//       successCallback: (imageData: string) => void,
//       errorCallback: (message: string) => void,
//       options?: CameraOptions
//     ): void;
//   };
// }

interface CameraOptions {
  quality?: number;
  destinationType?: number;
  sourceType?: number;
  allowEdit?: boolean;
  encodingType?: number;
  targetWidth?: number;
  targetHeight?: number;
  mediaType?: number;
  correctOrientation?: boolean;
  saveToPhotoAlbum?: boolean;
  cameraDirection?: number;
}

declare var Camera: {
  DestinationType: {
    DATA_URL: number;
    FILE_URI: number;
    NATIVE_URI: number;
  };
  EncodingType: {
    JPEG: number;
    PNG: number;
  };
  MediaType: {
    PICTURE: number;
    VIDEO: number;
    ALLMEDIA: number;
  };
  PictureSourceType: {
    PHOTOLIBRARY: number;
    CAMERA: number;
    SAVEDPHOTOALBUM: number;
  };
  PopoverArrowDirection: {
    ARROW_UP: number;
    ARROW_DOWN: number;
    ARROW_LEFT: number;
    ARROW_RIGHT: number;
    ARROW_ANY: number;
  };
  Direction: {
    BACK: number;
    FRONT: number;
  };
};
