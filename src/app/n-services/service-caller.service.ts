// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_54PzYAXeeWhXZO4M from 'app/sd-services/api_service'; //_splitter_
import * as sd_2p1bFF3BtpntnpjC from 'app/sd-services/face_api'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(
    private sd_54PzYAXeeWhXZO4M: sd_54PzYAXeeWhXZO4M.api_service,
    private sd_2p1bFF3BtpntnpjC: sd_2p1bFF3BtpntnpjC.face_api
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
