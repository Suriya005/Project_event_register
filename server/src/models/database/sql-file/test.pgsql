SELECT * FROM users ;

SELECT * FROM event ;

SELECT * FROM locations;

SELECT * FROM event_register;

UPDATE event set event_descr='กิจกรรมรับน้องปี 2564 ครั้งที่ 2' where event_id='A02';

DELETE from users WHERE user_id='6108111004';

INSERT INTO users VALUES 
    ('6108111006', '1234', 'A', 'Suriya', 'Phutduang', 'M', 'บริหารธุรกิจฯ', '2000-03-13','วิทยาการคอมพิวเตอร์'),
    ('6108111004', '1234', 'A', 'สุริยา', 'พุฒดวง', 'M', 'บริหารธุรกิจฯ', '2000-03-13','วิทยาการคอมพิวเตอร์');

INSERT INTO locations VALUES ('002', 'ตึก 5', '1.2111','2.11121');

INSERT INTO event VALUES ('A01', '2565', '002','A','รับน้อง', 'กิจกรรมรับน้องปี 2564 ครั้งที่ 1', 'ไฟล์ภาพ', '2021-8-1','08:00:00','12:00:00');

INSERT INTO event_register VALUES ('6108111004', '2564', 'A01','A','ไฟล์ภาพ');

INSERT INTO users(user_id,password,status,title_name ,fname,lname ,sex ,faculty ,birthday ,mejor) VALUES 
    ('6108111006', '1234', 'A', 'Suriya', 'Phutduang', 'M', 'บริหารธุรกิจฯ', '2000-03-13','วิทยาการคอมพิวเตอร์','')
    