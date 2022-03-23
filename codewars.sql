-- 1)     Adults only (SQL for Beginners #1)
- -
select *
from user swhere age >= 18 -- 2)     On the Canadian Border (SQL for Beginners #2)
    -- SELECT * from TRAVELERS where not COUNTRY in ('Mexico', "Canada", "USA")
    --3) Register for the Party (SQL for Beginners #3)
INSERT into participants
values ('Sergiy', 34, true);
SELECT *
FROM participants;
--4)  Collect Tuition (SQL for Beginners #4)
select *
from students
where tuition_received = false;
--5)  Best-Selling Books (SQL for Beginners #5)
select *
from books
order by copies_sold desc
limit 5;
--6) Countries Capitals for Trivia Night (SQL for Beginners #6)
select capital
from countries
where continent like 'Afri_a'
    and country like 'E%'
order by capital
limit 3;
--7) select price * amount as total from items