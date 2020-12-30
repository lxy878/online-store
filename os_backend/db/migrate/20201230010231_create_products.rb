class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.integer :qty
      t.string :description
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
