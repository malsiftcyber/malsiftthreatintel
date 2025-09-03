# Installation Guide

This guide will walk you through installing and setting up Malsift on your system.

## Prerequisites

### System Requirements

- **Operating System**: Linux (Ubuntu 20.04+ recommended), macOS, or Windows with WSL2
- **CPU**: 4+ cores recommended
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 50GB+ available space
- **Network**: Internet access for threat intelligence feeds

### Software Requirements

- **Docker**: 20.10+ and Docker Compose
- **Git**: Latest version
- **Python**: 3.11+ (for development)
- **Node.js**: 18+ (for frontend development)

## Installation Methods

### Method 1: Docker (Recommended)

The easiest way to get started with Malsift is using Docker Compose.

#### 1. Clone the Repository

```bash
git clone https://github.com/rebaker501/malsift.git
cd malsift
```

#### 2. Configure Environment

```bash
# Copy the example environment file
cp backend/.env.example backend/.env

# Edit the environment file with your settings
nano backend/.env
```

#### 3. Start the Services

```bash
# Start all services
docker-compose up -d

# Check service status
docker-compose ps
```

#### 4. Initialize the Database

```bash
# Run database migrations
docker-compose exec backend alembic upgrade head

# Create initial admin user
docker-compose exec backend python -m app.scripts.create_admin
```

#### 5. Access the Application

- **Web Interface**: http://localhost:3000
- **API Documentation**: http://localhost:8000/docs
- **Grafana Dashboard**: http://localhost:3001

## Configuration

### Environment Variables

Key configuration options in `backend/.env`:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost/malsift

# Security
SECRET_KEY=your-secret-key-here
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# API Keys (optional)
VIRUSTOTAL_API_KEY=your-vt-api-key
ALIENVAULT_API_KEY=your-otx-api-key
THREATFOX_API_KEY=your-threatfox-api-key
```

### Authentication Setup

#### Internal Authentication

Default admin credentials:
- **Username**: admin
- **Password**: admin123

**Important**: Change these credentials immediately after first login!

## Verification

### Health Checks

```bash
# Check API health
curl http://localhost:8000/health

# Check database connection
docker-compose exec backend python -c "from app.core.database import engine; print('Database OK')"

# Check Redis connection
docker-compose exec redis redis-cli ping
```

## Next Steps

After installation:

1. **Configure Feeds**: Set up your threat intelligence sources
2. **Create Users**: Add team members and configure permissions
3. **Set Up Monitoring**: Configure alerts and dashboards
4. **Customize**: Add custom feed parsers and exclusions

## Support

If you encounter issues:

1. Check the [Troubleshooting Guide](../troubleshooting/common-issues.md)
2. Open an issue on [GitHub](https://github.com/rebaker501/malsift/issues)
3. Join discussions on [GitHub Discussions](https://github.com/rebaker501/malsift/discussions)
