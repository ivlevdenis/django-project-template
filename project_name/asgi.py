"""
ASGI config for {{ project_name }} project.
It exposes the ASGI callable as a module-level variable named ``application``.
For more information on this file, see
https://channels.readthedocs.io/en/stable/deploying.html#run-interface-servers
"""
import os
import dotenv
import channels.asgi

try:
    env_filename = os.path.join(
        os.path.dirname(os.path.dirname(__file__)), '.env'
    )
    dotenv.read_dotenv(env_filename)
except Exception as e:
    print(e)

ENVIRONMENT = os.getenv('ENVIRONMENT')

if ENVIRONMENT == 'STAGING':
    settings = 'staging'
elif ENVIRONMENT == 'PRODUCTION':
    settings = 'production'
else:
    settings = 'development'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '{{ project_name }}.settings')
os.environ.setdefault('DJANGO_CONFIGURATION', settings.title())

channel_layer = channels.asgi.get_channel_layer()
