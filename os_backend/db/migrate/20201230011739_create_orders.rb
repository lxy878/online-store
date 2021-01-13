class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :qty
      t.decimal :amount
      t.integer :product_id
      t.integer :user_id

      t.timestamps
    end
  end
end
