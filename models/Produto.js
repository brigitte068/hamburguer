import { Model, DataTypes } from "sequelize";
import db from "./Database.js";

class Produto extends Model {
  static associate(models) {
    this.belongsTo(models.Categoria, {
      foreignKey: 'categoria_id',
      as: 'categoria'
    });
  }
}

Produto.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  disponivel: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Produto',
  tableName: 'produtos',
  paranoid: true,
  timestamps: true
});

export default Produto;