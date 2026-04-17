'use strict';

export default {
  up: async (interfaceQuery, Seq) => {
    await interfaceQuery.createTable('entregas', {
      pedido_id: {
        type: Seq.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'pedidos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      codigo_rastreio: {
        type: Seq.STRING,
        allowNull: false,
        unique: true
      },
      endereco: {
        type: Seq.STRING,
        allowNull: false
      },
      createdAt: {
        type: Seq.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Seq.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Seq.DATE,
        allowNull: true
      }
    });
  },

  down: async (interfaceQuery) => {
    await interfaceQuery.dropTable('entregas');
  }
};