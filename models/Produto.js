import { Model, DataTypes } from "sequelize";
import dbConnection from "./Database.js";

class Pedido extends Model {
  static associate(models) {
    this.hasOne(models.Entrega, { 
      foreignKey: 'pedido_id', 
      as: 'entrega' 
    });
    this.hasOne(models.Avaliacao, { 
      foreignKey: 'pedido_id', 
      as: 'avaliacao' 
    });
  }
}

Pedido.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  mesa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nome_cliente: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: dbConnection,
  tableName: 'pedidos',
  modelName: 'Pedido',
  timestamps: true,
  paranoid: true
});

export default Pedido;