### kvm Backup im laufenden Betrieb. Entnommen aus dem [Artikel](https://blog.tausys.de/2016/02/15/backup-der-vms-im-laufenden-betrieb-mit-libvirt/)

> Es wird zuerst ein Snapshot aller Volumes einer VM angelegt. Dadurch besteht jedes Volume aus (mindestens) zwei Dateien: eine Datei mit den originalen Daten und eine zweite Datei, welche alle Änderungen gegenüber dem Originalvolume ab dem Erstellen des Snapshots enthält. 

> Das Originalvolume wird bei aktivem Snapshot nicht mehr beschrieben, es kann nun problemlos gesichert werden. Zum Kopieren kann "rsync --sparse ..." zum Einsatz kommen.

> Anschließend werden mit einem sogenannten Blockcommit die im Snapshot als Änderungen geschriebene Blöcke in das Originalvolume wieder eingearbeitet.

> **snapshot-create-as** erzeugt in einem Schritt ein Snapshot aller Volumes der VM. 

Für alle laufenden VMs wird ausgeführt:
```
virsh snapshot-create-as .. -> erstellen eines Snapshots aller Volumes der VM
```
```
rsync --sparse ... -> kopieren der originalen Volumes ins Backupverzeichnis
```
```
virsh blockcommit ... -> einarbeiten der Änderungen ins originale Volume
```
```
fuser -s ${img} || rm ${img} -> löschen der Overlay-Images
```


Посмотреть подключённые диски с выводом информации о размере и свободном пространстве можно с помощью утилиты 
```
$ df -h
```
Можете узнать ещё больше с помощью команды lsblk:
```
$  lsblk
```

****

