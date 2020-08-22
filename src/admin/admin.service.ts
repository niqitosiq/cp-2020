import { Injectable } from '@nestjs/common';
import * as parser from 'xml2json';
import { UserService } from '../user/user.service';

type BufferFile = {
  buffer: Buffer;
};

@Injectable()
export class AdminService {
  constructor(private userService: UserService) {}

  async checkFile(file: BufferFile): Promise<any> {
    const content = Buffer.from(file.buffer).toString('utf8');
    const { KPOKS: json } = JSON.parse(parser.toJson(content));
    const cadastral = json.Realty.Flat.CadastralNumber;
    const area = json.Realty.Flat.Area;
    const rights =
      json.ReestrExtract.ExtractObjectRight.ExtractObject.ObjectRight.Right;

    const owners = [];
    if (Array.isArray(rights)) {
      for (const right of rights) {
        const multiplicator =
          right.Registration.Share.Numerator /
          right.Registration.Share.Denominator;

        await this.userService.create({
          avatar: '',
          name: right.Owner.Person.Content,
          voteValue: area * multiplicator,
          phone: cadastral,
        });

        owners.push({
          owner: right.Owner.Person.Content,
          total: area * multiplicator,
          multiplicator,
        });
      }
    } else {
      owners.push({
        owner: rights.Owner.Person.Content,
        total: area,
        multiplicator: 1,
      });
      await this.userService.create({
        avatar: '',
        name: rights.Owner.Person.Content,
        voteValue: area,
        phone: cadastral,
      });
    }

    return {
      cadastral,
      owners,
      area,
    };
  }
}
