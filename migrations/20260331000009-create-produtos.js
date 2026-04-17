'use strict';

export default {
  up: async (interfaceQuery, DataTypes) => {
    return interfaceQuery.createTable('produtos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      disponivel: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categorias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    });
  },

  down: async (interfaceQuery) => {
    return interfaceQuery.dropTable('produtos');
  }
};