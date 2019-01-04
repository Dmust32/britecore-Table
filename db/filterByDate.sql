SELECT * 
FROM table_data 
WHERE Date >= (CURRENT_TIMESTAMP - interval $1)