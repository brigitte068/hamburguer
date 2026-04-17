import { Model, DataTypes } from "sequelize";
import dbInstance from "./Database.js";

class Entrega extends Model {
  static associate(models) {
    this.belongsTo(models.Pedido, {
      foreignKey: 'pedido_id',
      as: 'pedido'
    });
  }
}

Entrega.init({
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  codigo_rastreio: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: dbInstance,
  tableName: 'entregas',
  modelName: 'Entrega',
  timestamps: true,
  paranoid: true
});

export default Entrega;