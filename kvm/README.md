> Es wird zuerst ein Snapshot aller Volumes einer VM angelegt. Dadurch besteht jedes Volume aus (mindestens) zwei Dateien: eine Datei mit den originalen Daten und eine zweite Datei, welche alle Änderungen gegenüber dem Originalvolume ab dem Erstellen des Snapshots enthält. 

****

Посмотреть подключённые диски с выводом информации о размере и свободном пространстве можно с помощью утилиты 
```
$ df -h
```
Можете узнать ещё больше с помощью команды lsblk:
```
$  lsblk
```

****

