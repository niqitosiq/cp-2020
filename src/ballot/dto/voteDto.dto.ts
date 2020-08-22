import { IUser } from 'src/user/interfaces/user.interface'

export class voteDto {
  readonly user: IUser;
  readonly id: string;
  readonly vote: string;
}
