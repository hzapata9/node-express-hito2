import {
    AllowNull,
    BelongsTo,
    Column,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    IsEmail,
    IsUUID,
    Model,
    PrimaryKey,
    Table,
    Unique,
  } from "sequelize-typescript";

@Table
export class Player extends Model {

}


@Table
export class Team extends Model {

}