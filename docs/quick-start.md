# Quick Start Guide

Get Malsift up and running in minutes with this quick start guide.

## Prerequisites

- Docker and Docker Compose installed
- Git installed
- At least 4GB RAM available

## 1. Clone and Start

```bash
# Clone the repository
git clone https://github.com/rebaker501/malsift.git
cd malsift

# Start all services
docker-compose up -d
```

## 2. Initialize the System

```bash
# Run database migrations
docker-compose exec backend alembic upgrade head

# Create admin user
docker-compose exec backend python -m app.scripts.create_admin
```

## 3. Access the Application

- **Web Interface**: http://localhost:3000
- **API Documentation**: http://localhost:8000/docs
- **Grafana Dashboard**: http://localhost:3001

## 4. First Login

Use the default credentials:
- **Username**: `admin`
- **Password**: `admin123`

**Important**: Change these credentials immediately!

## 5. Configure Your First Feed

1. Navigate to **Sources** in the web interface
2. Click **Add Source**
3. Select **CISA Known Exploited Vulnerabilities** (free)
4. Click **Save**

## 6. Fetch Your First Data

1. Go to **Feeds** page
2. Find your CISA feed
3. Click **Fetch Now**
4. Check **Indicators** page to see the results

## 7. Explore the Dashboard

Visit the **Dashboard** to see:
- Total indicators collected
- Threat level distribution
- Recent activity
- System health

## Next Steps

- [Full Installation Guide](installation.md)
- [API Documentation](api/overview.md)

## Troubleshooting

If you encounter issues:

1. Check service status: `docker-compose ps`
2. View logs: `docker-compose logs backend`
3. Restart services: `docker-compose restart`
