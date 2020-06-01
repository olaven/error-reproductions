import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity 
export class MyEntity {

    @PrimaryGeneratedColumn
    id: number; 

    @Column
    key: string;
}