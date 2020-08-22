import { Injectable } from '@nestjs/common';
import * as parser from 'xml2json';

type BufferFile = {
  buffer: Buffer;
};

@Injectable()
export class AdminService {
  async checkFile(file: BufferFile): Promise<any> {
    const content = Buffer.from(file.buffer).toString('utf8');
    const { KPOKS: json } = JSON.parse(parser.toJson(content));
    const cadastral = json.Realty.Flat.CadastralNumber;
    const area = json.Realty.Flat.Area;
    const rights =
      json.ReestrExtract.ExtractObjectRight.ExtractObject.ObjectRight.Right;

    let owners = [];
    if (Array.isArray(rights)) {
      owners = rights.map(right => ({
        owner: right.Owner.Person.Content,
        multiplicator:
          right.Registration.Share.Numerator /
          right.Registration.Share.Denominator,
      }));
    } else {
      owners.push({
        owner: rights.Owner.Person.Content,
        multiplicator: 1,
      });
    }

    return {
      cadastral,
      owners,
      area,
    };
  }
}
