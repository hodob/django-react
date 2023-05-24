from django.db import models

# Create your models here.
class test(models.Model):
    idx=models.AutoField(primary_key=True)
    test1 = models.CharField(max_length=200)

    

    # class Meta:
    #     verbose_name = _("")
    #     verbose_name_plural = _("s")

    # def __str__(self):
    #     return self.name

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})
class Dummy(models.Model):

    idx=models.AutoField(primary_key=True)
    test1 = models.CharField(max_length=200)

    class Meta:
        verbose_name = ("Dummy")
        verbose_name_plural = ("Dummys")
        db_table = 'dummy'

    # def __str__(self):
    #     return self.nametest

    # def get_absolute_url(self):
    #     return reverse("Dummy_detail", kwargs={"pk": self.pk})

# class django_migrations(models.Model):
#     id=models.AutoField(primary_key=True, null=False)
#     app=models.CharField(max_length=255,null=False)
#     name=models.CharField(max_length=255,null=False)
#     applied=models.DateTimeField()

    

#     class Meta:
#         db_table = 'django_migrations'

#     # def __str__(self):
#     #     return self.name

#     # def get_absolute_url(self):
#     #     return reverse("_detail", kwargs={"pk": self.pk})


class ApiTest(models.Model):
    idx = models.AutoField(primary_key=True)
    test1 = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'api_test'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'

class WalObsvtInfo(models.Model):
    obscd = models.IntegerField(blank=True, null=True)
    addr = models.TextField(blank=True, null=True)
    bbsncd = models.TextField(blank=True, null=True)
    bedslp = models.IntegerField(blank=True, null=True)
    bsnara = models.FloatField(blank=True, null=True)
    gdt = models.FloatField(blank=True, null=True)
    lat = models.TextField(blank=True, null=True)
    lon = models.TextField(blank=True, null=True)
    mggvcd = models.TextField(blank=True, null=True)
    mxgrd = models.FloatField(blank=True, null=True)
    obskdcd = models.TextField(blank=True, null=True)
    obsnm = models.TextField(blank=True, null=True)
    obsnmeng = models.TextField(blank=True, null=True)
    obsopndt = models.TextField(blank=True, null=True)
    olendobsdh = models.IntegerField(blank=True, null=True)
    olstartobsdh = models.IntegerField(blank=True, null=True)
    rivnm = models.TextField(blank=True, null=True)
    rvmjctdis = models.FloatField(blank=True, null=True)
    rvwdt = models.IntegerField(blank=True, null=True)
    sbsncd = models.IntegerField(blank=True, null=True)
    siendobsdh = models.IntegerField(blank=True, null=True)
    sistartobsdh = models.IntegerField(blank=True, null=True)
    tdeyn = models.TextField(blank=True, null=True)
    tmx = models.IntegerField(blank=True, null=True)
    tmy = models.IntegerField(blank=True, null=True)
    wlobscd = models.IntegerField(blank=True, null=True)
    wltel = models.FloatField(blank=True, null=True)
    wsrdis = models.TextField(blank=True, null=True)
    lat_md = models.FloatField(blank=True, null=True)
    lon_md = models.FloatField(blank=True, null=True)
