# This is a postgres CRUD model base on node-postgres.

### first step:

Run init sql in `/db/ddls/*.sql`

```sql
psql -U username -d test-pg -a -f <myInsertFile>
```

### second step:

Install libraries:

```
npm install
```

### third step:

Run `pg-first.js`:

```
node pg-first.js
```
