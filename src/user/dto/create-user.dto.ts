export class CreateUserDto {
  readonly email: string;
  readonly avatar: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly address: string;
  readonly profession: string;
  readonly phone: string;
  readonly roles: Array<string>;
  readonly password: string;
  readonly voteValue: number;
}
