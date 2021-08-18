BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "players" (
	"login"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("login")
);
INSERT INTO "players" ("login") VALUES ('vbugaev');
INSERT INTO "players" ("login") VALUES ('ibykov');
INSERT INTO "players" ("login") VALUES ('avarov');
INSERT INTO "players" ("login") VALUES ('vvasilev');
INSERT INTO "players" ("login") VALUES ('ilevshtanov');
INSERT INTO "players" ("login") VALUES ('aocheredko');
INSERT INTO "players" ("login") VALUES ('amelnikov');
INSERT INTO "players" ("login") VALUES ('dtomilov');
INSERT INTO "players" ("login") VALUES ('shikov');
INSERT INTO "players" ("login") VALUES ('mkipaikin');
INSERT INTO "players" ("login") VALUES ('ikuznetsov');
INSERT INTO "players" ("login") VALUES ('alupook');
INSERT INTO "players" ("login") VALUES ('ephilipchack');
INSERT INTO "players" ("login") VALUES ('achuhlomin');
INSERT INTO "players" ("login") VALUES ('aandreev');
INSERT INTO "players" ("login") VALUES ('gmazur');
INSERT INTO "players" ("login") VALUES ('imaskin');
INSERT INTO "players" ("login") VALUES ('aparshin');
INSERT INTO "players" ("login") VALUES ('dsuchkov');
INSERT INTO "players" ("login") VALUES ('gakilin');
INSERT INTO "players" ("login") VALUES ('ankislyakov');
INSERT INTO "players" ("login") VALUES ('arkislyakov');
INSERT INTO "players" ("login") VALUES ('dlukinov');
INSERT INTO "players" ("login") VALUES ('trashitov');
INSERT INTO "players" ("login") VALUES ('drodin');
INSERT INTO "players" ("login") VALUES ('asmirnov');
INSERT INTO "players" ("login") VALUES ('astelmaschuk');
COMMIT;
