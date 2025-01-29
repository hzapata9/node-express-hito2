import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";


@Table
export class Player extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  idplayer!: string;

  @Column(DataType.STRING)
  @AllowNull(false)
  name!: string;

  @Default(0)
  @Column(DataType.INTEGER)
  @AllowNull(false)
  number!: number;

  @Default("Calle 1")
  @Column(DataType.STRING)
  @AllowNull(false)
  address!: string;

  @Default("W/T")
  @ForeignKey(() => Team)
  @AllowNull(false)
  @Column(DataType.STRING)
  team!: string;
}

@Table
export class Team extends Model {
  @Default("Equipo NN")
  @Column(DataType.STRING)
  @AllowNull(false)
  name!: string;

  @Column(DataType.STRING)
  @AllowNull(false)
  city!: string;

  @Column(DataType.STRING)
  @AllowNull(false)
  owner!: string;

  @Column(DataType.STRING)
  @AllowNull(false)
  password!: string;
}
//
//
