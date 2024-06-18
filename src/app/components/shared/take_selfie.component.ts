// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import * as faceapi from 'face-api.js'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-take_selfie',
  templateUrl: './take_selfie.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class take_selfieComponent implements AfterViewInit {
  @ViewChild('video')
  public video: any = null;
  @ViewChild('queryImage')
  public queryImage: any = null;
  @ViewChild('canva')
  public canva: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_hSHgrV075PepeMKt(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hSHgrV075PepeMKt(bh) {
    try {
      bh = this.sd_yM7Cfi5ZuBP6isnN(bh);
      //appendnew_next_sd_hSHgrV075PepeMKt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hSHgrV075PepeMKt');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_9BqAWCoEJNfttuZB(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3fQHtlJC7yyEgGva');
    }
  }

  startVideo(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SNdARB2MWIUjYKxX(bh);
      //appendnew_next_startVideo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZQ3FkIARQ2zAUqik');
    }
  }

  fetchModels(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_jInIYXXYVGmp5z3L(bh);
      //appendnew_next_fetchModels
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R4Q96rbs43tqihPQ');
    }
  }

  detectFace(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_LXXiYoy52SuuzbIg(bh);
      //appendnew_next_detectFace
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jPcPGdKnw2eSDp1Y');
    }
  }

  compare(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nEaK8xVJNuiUGIUs(bh);
      //appendnew_next_compare
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lsTYvhNsCCWlQsxb');
    }
  }

  stopCamera(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ObfLetUp8jofTRXL(bh);
      //appendnew_next_stopCamera
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AntJDG0ZCQQX8RQN');
    }
  }
  //appendnew_flow_take_selfieComponent_start

  sd_yM7Cfi5ZuBP6isnN(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_CL6VBcskCuJZ0KdU(bh);
      //appendnew_next_sd_yM7Cfi5ZuBP6isnN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yM7Cfi5ZuBP6isnN');
    }
  }

  sd_CL6VBcskCuJZ0KdU(bh) {
    try {
      bh = this.sd_6xpH57tjRBbrXMO2(bh);
      //appendnew_next_sd_CL6VBcskCuJZ0KdU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CL6VBcskCuJZ0KdU');
    }
  }

  sd_6xpH57tjRBbrXMO2(bh) {
    try {
      this.page.faceapi = faceapi;
      bh = this.sd_KWg4ptS7NlnGR7eG(bh);
      //appendnew_next_sd_6xpH57tjRBbrXMO2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6xpH57tjRBbrXMO2');
    }
  }

  sd_KWg4ptS7NlnGR7eG(bh) {
    try {
      this.page.video = undefined;
      this.page.similiarityValue = 0.5029092815091631;
      this.page.detectVideoFace = undefined;
      this.page.detected = false;
      this.page.intervalID = undefined;
      this.page.videoStream = undefined;
      this.page.routeData = undefined;
      bh = this.sd_DvoqaNOvHalcTn3Y(bh);
      //appendnew_next_sd_KWg4ptS7NlnGR7eG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KWg4ptS7NlnGR7eG');
    }
  }

  sd_DvoqaNOvHalcTn3Y(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.routeData = route.snapshot.queryParams;
      //appendnew_next_sd_DvoqaNOvHalcTn3Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DvoqaNOvHalcTn3Y');
    }
  }

  sd_9BqAWCoEJNfttuZB(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, { video: this.video });
      bh = this.sd_YIKzF5GhLrdQCfLs(bh);
      //appendnew_next_sd_9BqAWCoEJNfttuZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9BqAWCoEJNfttuZB');
    }
  }

  sd_YIKzF5GhLrdQCfLs(bh) {
    try {
      const page = this.page;
      page.video = bh.pageViews.video;
      page.video.nativeElement.controls = false;
      console.log(page.video);
      console.log(bh);

      // document.addEventListener("deviceready", async() => await this.startVideo(), false);
      // this.startVideo()
      bh = this.loadModelsLocally(bh);
      //appendnew_next_sd_YIKzF5GhLrdQCfLs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YIKzF5GhLrdQCfLs');
    }
  }

  loadModelsLocally(bh) {
    try {
      let outputVariables = this.fetchModels();

      //appendnew_next_loadModelsLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uF9ggM6RlXBywTP3');
    }
  }

  sd_SNdARB2MWIUjYKxX(bh) {
    try {
      const page = this.page;
      page.videoStream = page.video.nativeElement;

      const captureSuccess = () => {
        console.log('Recording');
      };

      // capture error callback
      const captureError = () => {
        console.log('Ran into an error');
      };

      const openVid = () => {
        if ('mediaDevices' in navigator) {
          if (window.innerWidth < 1024) {
            navigator.camera.getPicture(captureSuccess, captureError, {
              quality: 50,
              destinationType: Camera.DestinationType.DATA_URL,
              mediaType: Camera.MediaType.VIDEO,
            });
            console.log('Cordova app running');
          } else {
            navigator.mediaDevices
              .getUserMedia({ video: {}, audio: false })
              .then((mediaStream) => {
                page.videoStream.srcObject = mediaStream;
                page.videoStream.onloadedmetadata = () => {
                  page.videoStream.play();
                };
              })
              .catch((err) => {
                console.log('Playing a video error', err);
              });
          }
        }
      };

      if ('mediaDevices' in navigator) {
        navigator.mediaDevices
          .getUserMedia({ video: {}, audio: false })
          .then((mediaStream) => {
            page.videoStream.srcObject = mediaStream;
            page.videoStream.onloadedmetadata = () => {
              page.videoStream.play();
            };
          })
          .catch((error) => {
            if (error.name === 'NotAllowedError') {
              console.error(
                'Permissions have not been granted to use your camera. Please allow access.'
              );
            } else if (error.name === 'NotFoundError') {
              console.error('No camera device found.');
            } else if (
              error.name === 'NotReadableError' ||
              error.name === 'TrackStartError'
            ) {
              console.error('Camera is already in use by another application.');
            } else {
              console.error('Error accessing the camera: ' + error.message);
            }
            console.error('Error accessing the camera', error);
          });
      }

      // capture callback

      console.log(faceapi);
      bh = this.sd_kxpmd5c4f2S05N4B(bh);
      //appendnew_next_sd_SNdARB2MWIUjYKxX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SNdARB2MWIUjYKxX');
    }
  }

  sd_kxpmd5c4f2S05N4B(bh) {
    try {
      let outputVariables = this.detectFace();

      //appendnew_next_sd_kxpmd5c4f2S05N4B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kxpmd5c4f2S05N4B');
    }
  }

  async sd_jInIYXXYVGmp5z3L(bh) {
    try {
      const page = this.page;
      if (window.innerWidth < 1024) {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('./assets/models'),
          await faceapi.nets.faceLandmark68Net.loadFromUri('./assets/models'),
          await faceapi.nets.faceRecognitionNet.loadFromUri('./assets/models'),
          await faceapi.nets.faceExpressionNet.loadFromUri('./assets/models'),
        ]).then(() => this.startVideo());
      } else {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('../../assets/models'),
          await faceapi.nets.faceLandmark68Net.loadFromUri(
            '../../assets/models'
          ),
          await faceapi.nets.faceRecognitionNet.loadFromUri(
            '../../assets/models'
          ),
          await faceapi.nets.faceExpressionNet.loadFromUri(
            '../../assets/models'
          ),
        ]).then(() => this.startVideo());
      }
      //appendnew_next_sd_jInIYXXYVGmp5z3L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jInIYXXYVGmp5z3L');
    }
  }

  async sd_LXXiYoy52SuuzbIg(bh) {
    try {
      const page = this.page;
      let videoFace = page.video.nativeElement;
      page.intervalID = setInterval(async () => {
        page.detectVideoFace = await faceapi
          .detectAllFaces(videoFace, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions()
          .withFaceDescriptors();
        if (!page.detectVideoFace.length) {
          page.detected = false;
          console.log('Not detected');
        } else {
          page.detected = true;
          console.log(page.detectVideoFace);
          clearInterval(page.intervalID);
          this.compare();
          // this.stopCamera()
        }
      }, 10);
      //appendnew_next_sd_LXXiYoy52SuuzbIg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LXXiYoy52SuuzbIg');
    }
  }

  sd_nEaK8xVJNuiUGIUs(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        queryImage: this.queryImage,
      });
      bh = this.sd_SYRWXoozvB0Z6fFv(bh);
      //appendnew_next_sd_nEaK8xVJNuiUGIUs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nEaK8xVJNuiUGIUs');
    }
  }

  async sd_SYRWXoozvB0Z6fFv(bh) {
    try {
      const page = this.page;
      let video = page.video.nativeElement;
      let queryImage = bh.pageViews.queryImage.nativeElement;

      let detectqueryImage = await faceapi
        .detectSingleFace(queryImage, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withFaceDescriptor();

      page.detectVideoFace.forEach((singleFace: any) => {
        let distance = faceapi.euclideanDistance(
          singleFace.descriptor,
          detectqueryImage.descriptor
        );
        console.log(distance);

        if (distance < page.similiarityValue) {
          //clearInterval(page.intervalID)
          console.log('You are Simphiwe');
          if (page.routeData.isRegister) {
            page.router.navigate(['/register_feedback']);
          } else {
            page.router.navigate(['/feedback']);
          }
        } else {
          // page.clearInterval(page.intervalID)
          console.log('You are not Simphiwe');
          page.router.navigate(['/unable_to_capture'], {
            queryParams: page.routeData,
          });
        }
        // clearInterval(page.intervalID)
      });

      // navigator.mediaDevices.getUserMedia({video: {}, audio: false})
      //         .then((mediaStream) => {
      //             mediaStream.getTracks().forEach(stream => {
      //                 console.log(stream)
      //                 stream.stop()
      //             })
      //             console.log(page.videoStream)
      //             page.videoStream.srcObject = null
      //             page.videoStream.stop()
      //             console.log(mediaStream)
      //         })
      bh = this.sd_79bZT161xRBVxp5e(bh);
      //appendnew_next_sd_SYRWXoozvB0Z6fFv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SYRWXoozvB0Z6fFv');
    }
  }

  sd_79bZT161xRBVxp5e(bh) {
    try {
      let outputVariables = this.stopCamera();

      //appendnew_next_sd_79bZT161xRBVxp5e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_79bZT161xRBVxp5e');
    }
  }

  sd_ObfLetUp8jofTRXL(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        canva: this.canva,
        video: this.video,
      });
      bh = this.sd_JFgGkJDrgBJUr08x(bh);
      //appendnew_next_sd_ObfLetUp8jofTRXL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ObfLetUp8jofTRXL');
    }
  }

  sd_JFgGkJDrgBJUr08x(bh) {
    try {
      const page = this.page;
      let video = bh.pageViews.video.nativeElement;
      // Get streams
      let streams = video.srcObject;
      // Get all tracks
      let tracks = streams.getTracks();
      // Closing each track
      tracks.forEach((track) => {
        track.stop();
      });
      // console.log('Interval ID: ', page.intervalID)
      // clearInterval(page.intervalID)

      //appendnew_next_sd_JFgGkJDrgBJUr08x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JFgGkJDrgBJUr08x');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_take_selfieComponent_Catch
}
