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

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @Default(0)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  number!: number;

  @Default("Calle 1")
  @AllowNull(false)
  @Column(DataType.STRING)
  address!: string;

  @Default("W/T")
  @ForeignKey(() => Team)
  @AllowNull(false)
  @Column(DataType.STRING)
  team!: string;
}

@Table
export class Team extends Model {
  @PrimaryKey
  @Default("Equipo NN")
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  city!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  owner!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;
}
//
//
