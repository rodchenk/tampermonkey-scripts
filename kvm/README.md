### kvm Backup im laufenden Betrieb. Entnommen aus dem [Artikel](https://blog.tausys.de/2016/02/15/backup-der-vms-im-laufenden-betrieb-mit-libvirt/)

> Es wird zuerst ein Snapshot aller Volumes einer VM angelegt. Dadurch besteht jedes Volume aus (mindestens) zwei Dateien: eine Datei mit den originalen Daten und eine zweite Datei, welche alle Änderungen gegenüber dem Originalvolume ab dem Erstellen des Snapshots enthält. 

> Das Originalvolume wird bei aktivem Snapshot nicht mehr beschrieben, es kann nun problemlos gesichert werden. Zum Kopieren kann "rsync --sparse ..." zum Einsatz kommen.

> Anschließend werden mit einem sogenannten Blockcommit die im Snapshot als Änderungen geschriebene Blöcke in das Originalvolume wieder eingearbeitet.

> **snapshot-create-as** erzeugt in einem Schritt ein Snapshot aller Volumes der VM. 

Für alle laufenden VMs wird ausgeführt:
```
$ virsh snapshot-create-as .. # erstellen eines Snapshots aller Volumes der VM
```
```
$ rsync --sparse ... # kopieren der originalen Volumes ins Backupverzeichnis
```
```
$ virsh blockcommit ... # einarbeiten der Änderungen ins originale Volume
```
```
$ fuser -s ${img} || rm ${img} # löschen der Overlay-Images
```

> Nach dem Abarbeiten aller Volumes wird das XML-Definitionsfile der jeweiligen VM ebenfalls ins Backup-Verzeichnis kopiert.

> Für die Option "--quiesce" in **virsh snapshot-create-as** ist es notwenig, dass auf dem Gast der sogenannte "qemu-guest-agent" installiert ist. Dieser kann Befehle vom Host-System entgegen nehmen und wie in diesem Fall, das Dateisystem in einen konsistenten Zustand versetzen.

> Für jede VM werden die Volumes aufgelistet, ein Snapshot aller Volumes angelegt und anschließend jedes Volume gesichert. Danach werden die Snapshots wieder in die Original-Volumes eingearbeitet 

#### Weitere Links [Live hot KVM Backup](https://serveradmin.ru/kvm-backup/), [Rsync](https://serveradmin.ru/rsync-nastroyka-bekapa-na-centos-debian-ubuntu/)

Список дисков виртуальной машины.

```
$ virsh domblklist <vm-name> --details
```

Информация о конрктеном диске заданной виртуальной машины
```
$ virsh domblkinfo <vm-name> /mnt/DIR_NAME/FILE_NAME.qcow2
```

Список снепшотов заданной виртуальной машины и инфомарция о текущем её снепшоте.
```
$ virsh snapshotlist <vm-name>
$ virsh snapshotinfo --domain <vm-name> --current
```



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

