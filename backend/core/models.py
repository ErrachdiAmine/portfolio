from django.db import models

# Create your models here.


class Contact(models.Model):
    phone = models.TextField(blank=False, default='+212675806074')
    github = models.TextField(blank=True)
    linkedin = models.TextField(blank=True)
    instagram = models.TextField(blank=True)


    def __str__(self):
        return f"""Phone Number: {self.phone}
                   Github: {self.github}
                   LinkedIn: {self.linkedin}
                   Instagram: {self.instagram}
        """