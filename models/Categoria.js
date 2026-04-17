import { Model, DataTypes } from 'sequelize';
import db from "./Database.js";

class Categoria extends Model {
  static associate(models) {
    this.hasMany(models.Produto, {
      foreignKey: 'categoria_id',
      as: 'produtos'
    });
  }
}

Categoria.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O nome não pode ser vazio' }
    }
  }
}, {
  sequelize: db,
  modelName: 'Categoria',
  tableName: 'categorias',
  paranoid: true,
  timestamps: true
});

export default Categoria;