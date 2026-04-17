import { DataTypes, Model } from "sequelize";
import db from "./Database.js";

class Avaliacao extends Model {
  static associate(models) {
    this.belongsTo(models.Pedido, { 
      foreignKey: 'pedido_id', 
      as: 'pedido' 
    });
  }
}

Avaliacao.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'avaliacoes',
  modelName: 'Avaliacao',
  timestamps: true,
  paranoid: true
});

export default Avaliacao;