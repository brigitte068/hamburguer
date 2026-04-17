'use strict';

export default {
  up: async (query, Seq) => {
    await query.createTable('avaliacoes', {
      id: {
        type: Seq.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nota: {
        type: Seq.INTEGER,
        allowNull: false
      },
      pedido_id: {
        type: Seq.INTEGER,
        allowNull: false,
        references: {
          model: 'pedidos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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

    await query.addConstraint('avaliacoes', {
      fields: ['nota'],
      type: 'check',
      name: 'limitacao_nota_entre_1_e_5',
      where: {
        nota: {
          [Seq.Op.gte]: 1,
          [Seq.Op.lte]: 5
        }
      }
    });
  },

  down: async (query) => {
    await query.dropTable('avaliacoes');
  }
};