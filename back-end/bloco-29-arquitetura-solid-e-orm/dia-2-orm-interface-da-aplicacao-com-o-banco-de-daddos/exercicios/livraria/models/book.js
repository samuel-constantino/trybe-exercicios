const Book = (sequelize, DataTypes) => (
    sequelize.define(
        'Book',
        {
            title: DataTypes.STRING,
            author: DataTypes.STRING,
            page_quantity: DataTypes.INTEGER,
        },
        {
            underscored: true,
            tableName: 'Books',
        }
    )
);

module.exports = Book;
