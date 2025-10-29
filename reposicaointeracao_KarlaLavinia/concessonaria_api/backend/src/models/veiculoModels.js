import { DataTypes } from 'sequelize'
import conn from '../config/database.js';

export const veiculoModels = conn.define(
    "veiculos",
    {
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        placa: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        ano: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        cor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'veiculos',
        timestamps: true
    }
);
