// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import * as faceapi from 'face-api.js'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class face_api {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_face_api

  async loadModels(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_wuqgnli9O8HmSebv(bh);
      //appendnew_next_loadModels
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xyYEnNvDDfLtQl41');
    }
  }

  async checkFilePath(filePath: any = undefined, ...others) {
    let bh: any = {
      input: {
        filePath,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_j0Exa4jRACYayk4c(bh);
      //appendnew_next_checkFilePath
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZKEzlKLidNaK3Din');
    }
  }

  async loadModel(
    net: any = undefined,
    manifestFile: any = undefined,
    modelPath: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        net,
        manifestFile,
        modelPath,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_huShByNjvcgWOEeG(bh);
      //appendnew_next_loadModel
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VSjfQNCFQpn6YyJB');
    }
  }

  async readJsonFile(filePath: any = undefined, ...others) {
    let bh: any = {
      input: {
        filePath,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_HQ9Ob6mNfVTiAb9U(bh);
      //appendnew_next_readJsonFile
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_auANTU5PjF8EDNh9');
    }
  }

  async readBinaryFile(filePath: any = undefined, ...others) {
    let bh: any = {
      input: {
        filePath,
      },
      local: {
        file: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_jhGxZb9xjaZ0Cc3J(bh);
      //appendnew_next_readBinaryFile
      return (
        // formatting output variables
        {
          input: {},
          local: {
            file: bh.local.file,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aIHEgHpLwYpGWdgD');
    }
  }

  async loadModelsFromGit(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_hx5dcbGG5uxvLOd7(bh);
      //appendnew_next_loadModelsFromGit
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_icUyTyDYjBUu7EWr');
    }
  }
  //appendnew_flow_face_api_start

  async sd_wuqgnli9O8HmSebv(bh) {
    try {
      bh.faceapi = faceapi;
      bh = await this.sd_QJ2CS66ghxWp73fK(bh);
      //appendnew_next_sd_wuqgnli9O8HmSebv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wuqgnli9O8HmSebv');
    }
  }

  async sd_QJ2CS66ghxWp73fK(bh) {
    try {
      console.log('Cordova file system: ', cordova.file.applicationDirectory);
      return new Promise((resolve, reject) => {
        document.addEventListener('deviceready', async () => {
          try {
            const modelPath =
              cordova.file.applicationDirectory + 'www/assets/models/';
            console.log('Model path: ', modelPath);
            this.checkFilePath(
              modelPath + 'tiny_face_detector_model-weights_manifest.json'
            );
            this.checkFilePath(
              modelPath + 'face_landmark_68_model-weights_manifest.json'
            );
            this.checkFilePath(
              modelPath + 'face_recognition_model-weights_manifest.json'
            );
            this.checkFilePath(
              modelPath + 'ssd_mobilenetv1_model-weights_manifest.json'
            );

            await this.loadModel(
              faceapi.nets.tinyFaceDetector,
              modelPath,
              'tiny_face_detector_model-weights_manifest.json'
            );
            await this.loadModel(
              faceapi.nets.faceLandmark68Net,
              modelPath,
              'face_landmark_68_model-weights_manifest.json'
            );
            await this.loadModel(
              faceapi.nets.faceRecognitionNet,
              modelPath,
              'face_recognition_model-weights_manifest.json'
            );
            await this.loadModel(
              faceapi.nets.ssdMobilenetv1,
              modelPath,
              'ssd_mobilenetv1_model-weights_manifest.json'
            );

            resolve('Resolved');
          } catch (error) {
            console.error('Error loading models: ', error);
            reject(error);
          }
        });
      });
      //appendnew_next_sd_QJ2CS66ghxWp73fK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QJ2CS66ghxWp73fK');
    }
  }

  async sd_j0Exa4jRACYayk4c(bh) {
    try {
      return new Promise((resolve, reject) => {
        console.log(`Checking file path: ${bh.input.filePath}`);
        window.resolveLocalFileSystemURL(
          bh.input.filePath,
          (fileEntry) => {
            console.log(`File found: ${bh.input.filePath}`);
            resolve('Resolved');
          },
          (err) => {
            console.error(`File not found: ${bh.input.filePath}`, err);
            reject(err);
          }
        );
      });
      //appendnew_next_sd_j0Exa4jRACYayk4c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j0Exa4jRACYayk4c');
    }
  }

  async sd_huShByNjvcgWOEeG(bh) {
    try {
      this.readJsonFile(bh.input.manifestFile + bh.input.modelPath)
        .then((file) => {
          file.local.result
            .then(async (res) => {
              console.log('FIle before the json: ', res);
              // res.json()
              let manifest = res[0];
              console.log('manifest object: ', manifest);

              const weightPaths = manifest.weights.map(
                (weight: any) => bh.input.manifestFile + manifest.paths[0]
              );
              console.log('Weight paths:', weightPaths);

              const weights = await Promise.all(
                weightPaths.map((weightPath: string) => {
                  console.log(
                    'Console loging the resolved new: ',
                    this.readBinaryFile(weightPath)
                  );
                  return this.readBinaryFile(weightPath);
                })
              );
              console.log('Loaded weights:', weights);

              if (!bh.input.net || typeof bh.input.net.load !== 'function') {
                throw new Error('Invalid net object: load method is missing');
              }
              console.log('Net: ', bh.input.net);
              await bh.input.net.load(weights);
              console.log('Models loaded successfully');
            })
            .catch((err) => {
              console.log('Error occured when loading models: ', err);
            });
        })
        .catch((err) => {
          console.log('Error occured when loading models: ', err);
        });

      // try {
      //       console.log('BH in the loadModel ', bh)
      //       let manifest = await this.readJsonFile(bh.input.manifestFile + bh.input.modelPath);
      //       manifest = manifest.local.result.__zone_symbol__value
      //       console.log('Loaded manifest:', manifest.local.result);
      //       // console.log('Loaded manifest without the wait:', this.readJsonFile(bh.input.manifestFile + bh.input.modelPath));

      //       const weightPaths = manifest.weights.map((weight: any) => bh.input.modelPath + weight.paths[0]);
      //       console.log('Weight paths:', weightPaths);

      //       const weights = await Promise.all(weightPaths.map((weightPath: string) => this.readBinaryFile(weightPath)));
      //       console.log('Loaded weights:', weights);

      //       console.log('Net: ', bh.input.net)
      //       await bh.input.net.load(weights);
      //     } catch (error) {
      //       console.log('BH in the loadModel ', bh)
      //       console.error('Error loading model:', error);
      //       throw error;
      //     }
      //appendnew_next_sd_huShByNjvcgWOEeG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_huShByNjvcgWOEeG');
    }
  }

  async sd_HQ9Ob6mNfVTiAb9U(bh) {
    try {
      bh.local.result = new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(
          bh.input.filePath,
          (fileEntry) => {
            fileEntry.file(
              (file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  try {
                    const json = JSON.parse(reader.result as string);
                    resolve(json);
                  } catch (err) {
                    console.error('Error parsing JSON file:', err);
                    reject({ message: 'Error parsing JSON file', error: err });
                  }
                };
                reader.onerror = (err) => {
                  console.error('Error reading JSON file:', err);
                  reject({ message: 'Error reading JSON file', error: err });
                };
                reader.readAsText(file);
              },
              (err) => {
                console.error('Error getting file:', err);
                reject({ message: 'Error getting file', error: err });
              }
            );
          },
          (err) => {
            console.error('Error resolving file system URL:', err);
            reject({ message: 'Error resolving file system URL', error: err });
          }
        );
      });
      //appendnew_next_sd_HQ9Ob6mNfVTiAb9U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HQ9Ob6mNfVTiAb9U');
    }
  }

  async sd_jhGxZb9xjaZ0Cc3J(bh) {
    try {
      console.log('Filepath to be resolved: ', bh.input.filePath);

      bh.local.file = new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(
          bh.input.filePath,
          (fileEntry) => {
            fileEntry.file(
              (file) => {
                console.log('Inside the fileEntry: ', file);
                const reader = new FileReader();
                console.log('Reader: ', reader);
                reader.onloadend = () => {
                  console.log('Read binary file:', reader.result);
                  console.log('Reader: ', reader);
                  let b = new Blob([reader.result as ArrayBuffer], {
                    type: 'application/octet-stream',
                  });
                  console.log('Returned blob: ', b);
                  console.log(bh);
                  resolve(
                    new Blob([reader.result as ArrayBuffer], {
                      type: 'application/octet-stream',
                    })
                  );
                };
                reader.onerror = (error) => {
                  console.error('Error reading binary file:', error);
                  reject(error);
                };
                reader.readAsArrayBuffer(file);
              },
              (err) => {
                console.log('Did get inside the resolving of the file');
                console.error('Error resolving file system URL:', err);
                reject(err);
              }
            );
          },
          (err) => {
            console.log("Didn't even get inside the resolving of the file");
            console.error('Error resolving file system URL:', err);
            reject(err);
          }
        );
      });
      //appendnew_next_sd_jhGxZb9xjaZ0Cc3J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jhGxZb9xjaZ0Cc3J');
    }
  }

  async sd_hx5dcbGG5uxvLOd7(bh) {
    try {
      const modelBaseUrl =
        'https://raw.githubusercontent.com/Simphiwe20/models/main/';

      const loadAllModels = async () => {
        try {
          await faceapi.nets.tinyFaceDetector.loadFromUri(modelBaseUrl);
          await faceapi.nets.faceLandmark68Net.loadFromUri(modelBaseUrl);
          await faceapi.nets.faceRecognitionNet.loadFromUri(modelBaseUrl);
          await faceapi.nets.ssdMobilenetv1.loadFromUri(modelBaseUrl);
          console.log('All models loaded successfully');
        } catch (error) {
          console.error('Error loading models:', error);
        }
      };

      loadAllModels();

      //appendnew_next_sd_hx5dcbGG5uxvLOd7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hx5dcbGG5uxvLOd7');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_face_api_Catch
}
