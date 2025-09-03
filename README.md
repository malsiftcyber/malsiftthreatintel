# Malsift - Cyber Threat Intelligence Aggregation Platform

<div align="center">
  <h1>🕵️‍♂️ <span style="color: #2a4a6a; font-family: Georgia, serif; font-weight: bold;">MALSIFT</span> 🕵️‍♂️</h1>
  <p><em>Cyber Threat Intelligence Aggregation Platform</em></p>
</div>

## 🎨 Branding

### Logo
The Malsift logo features a distinctive design that represents the platform's mission:

- **Hooded Figure**: Represents the mysterious and hidden nature of cyber threats
- **Glowing Red Eyes**: Symbolizes constant vigilance and threat detection
- **Network Structure**: The molecular/network symbol on the figure's chest represents the interconnected nature of threat intelligence and data analysis
- **Dark Theme**: Reflects the cybersecurity domain and the need for stealth in threat hunting

Multiple logo variants are available:
- `logo.svg` - Full logo with text (200x80px)
- `logo-text.svg` - Text-only version for smaller spaces (120x40px)
- `favicon.svg` - Favicon version (32x32px)

## 🚀 Features

### **Multi-Source Intelligence Aggregation**
- **Government Sources**: CISA Known Exploited Vulnerabilities, FBI Cyber Division feeds, DHS Automated Indicator Sharing
- **Open Source Sources**: AlienVault OTX, MISP, OpenPhish, PhishTank, URLhaus (Abuse.ch)
- **Commercial Sources**: VirusTotal, ThreatFox, IBM X-Force Exchange, Recorded Future, CrowdStrike Falcon (free tiers)
- **Custom Feed Support**: Add any threat intelligence source with custom parsers

### **Advanced Deduplication System**
- **Intelligent Normalization**: IP addresses, domains, URLs, hashes, emails
- **Confidence Score Merging**: Automatically merges duplicate indicators with highest confidence
- **Tag Consolidation**: Combines tags and metadata from multiple sources
- **Duplicate Tracking**: Comprehensive reporting on duplicate detection and resolution

### **Dark Web Monitoring**
- **Tor Integration**: Built-in Tor proxy support for dark web access
- **Configurable Scraping**: Set custom intervals and source management
- **Content Extraction**: Advanced parsing and indicator extraction from dark web content
- **Source Management**: Add, configure, and monitor dark web sources

### **Free Tier Optimization**
- **Rate Limiting**: Configurable limits per source to stay within free tiers
- **Throttling Mechanisms**: Intelligent request spacing and backoff
- **Usage Tracking**: Monitor API usage and stay within limits
- **Cost Management**: Optimize for free tier usage across all sources

### **Indicator Exclusion System**
- **Pattern Matching**: Support for exact, regex, and wildcard patterns
- **Real-time Filtering**: Exclude indicators from API responses in real-time
- **Bulk Management**: Import exclusions from CSV/JSON files
- **Pattern Testing**: Test exclusion patterns against existing indicators
- **Flexible Rules**: Exclude by indicator type, value patterns, or combinations

### **Modern Web Interface**
- **React + TypeScript**: Modern, responsive frontend with Tailwind CSS
- **Real-time Dashboard**: Live statistics and threat level distributions
- **Advanced Filtering**: Search, filter, and sort indicators by multiple criteria
- **Feed Management**: Visual interface for managing threat intelligence sources
- **Job Monitoring**: Real-time status of background fetch operations

### **RESTful API**
- **FastAPI Backend**: High-performance API with automatic OpenAPI documentation
- **Comprehensive Endpoints**: Full CRUD operations for all entities
- **Filtering & Pagination**: Advanced query capabilities with pagination
- **Rate Limiting**: Built-in API rate limiting and authentication
- **WebSocket Support**: Real-time updates and notifications

### **Enterprise Features**
- **PostgreSQL Database**: Robust, scalable data storage
- **Redis Caching**: High-performance caching and job queue
- **Celery Background Jobs**: Asynchronous processing for long-running tasks
- **Prometheus Metrics**: Comprehensive monitoring and observability
- **Grafana Dashboards**: Visual analytics and reporting
- **Docker Deployment**: Containerized deployment with Docker Compose


## 📊 Supported Threat Intelligence Sources

### **Premium Threat Intelligence Sources**

| **Source** | **Type** | **Authentication** | **Rate Limit** | **Description** |
|------------|----------|-------------------|----------------|-----------------|
| CrowdStrike Falcon Intelligence | Commercial | OAuth2 | 2 req/min | Advanced threat intelligence with malware family analysis |
| Mandiant Threat Intelligence | Commercial | API Key | 5 req/min | Comprehensive threat research and analysis |
| Recorded Future | Commercial | API Key | 3 req/min | Real-time threat intelligence and risk scoring |
| Nordstellar | Commercial | API Key | 2 req/min | Specialized threat intelligence feeds |
| Anomali ThreatStream | Commercial | API Key | 5 req/min | Threat intelligence platform with advanced analytics |
| FBI InfraGuard | Government | API Key | 5 req/min | Government threat intelligence and alerts |

### **Government Sources**

| **Source** | **Type** | **Authentication** | **Rate Limit** | **Description** |
|------------|----------|-------------------|----------------|-----------------|
| CISA Known Exploited Vulnerabilities | Government | None | Unlimited | Official government vulnerability database |
| FBI Cyber Division | Government | API Key | 5 req/min | Federal law enforcement threat intelligence |
| DHS Automated Indicator Sharing | Government | API Key | 10 req/min | Department of Homeland Security feeds |

### **Open Source Sources**

| **Source** | **Type** | **Authentication** | **Rate Limit** | **Description** |
|------------|----------|-------------------|----------------|-----------------|
| AlienVault OTX | Open Source | API Key | 10 req/min | Community-driven threat intelligence platform |
| MISP | Open Source | API Key | Unlimited | Malware Information Sharing Platform |
| OpenPhish | Open Source | None | Unlimited | Real-time phishing URL feeds |
| PhishTank | Open Source | None | Unlimited | Community-driven phishing database |
| URLhaus (Abuse.ch) | Open Source | None | Unlimited | Malicious URL tracking and analysis |
| AbuseIPDB | Open Source | API Key | 3 req/min | IP reputation and abuse reporting |
| Binary Defense Artillery | Open Source | None | Unlimited | Threat intelligence feed |
| Botvrij.eu | Open Source | None | Unlimited | Open source threat intelligence feeds |
| BruteForceBlocker | Open Source | None | Unlimited | SSH brute force attack tracking |
| Emerging Threats | Open Source | None | Unlimited | Compromised IP and domain feeds |
| MalwareBazaar | Open Source | None | Unlimited | Malware sample repository and analysis |
| Feodo Tracker | Open Source | None | Unlimited | Botnet command and control tracking |

### **Commercial Sources**

| **Source** | **Type** | **Authentication** | **Rate Limit** | **Description** |
|------------|----------|-------------------|----------------|-----------------|
| VirusTotal | Commercial | API Key | 4 req/min | File and URL reputation analysis |
| ThreatFox | Open Source | API Key | 5 req/min | Malware threat intelligence |
| IBM X-Force Exchange | Commercial | API Key | 10 req/min | Enterprise threat intelligence platform |

### **Custom Feed Support**
Add any threat intelligence source with custom parsers and integration modules.

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend│    │   FastAPI Backend│    │  PostgreSQL DB  │
│   (TypeScript)  │◄──►│   (Python)      │◄──►│                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Redis Cache   │
                       │   & Job Queue   │
                       └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │  Celery Workers │
                       │  (Background)   │
                       └─────────────────┘
```

## 📋 Prerequisites

- **Docker** (20.10+) and **Docker Compose** (2.0+)
- **Git** for cloning the repository
- **4GB RAM** minimum (8GB recommended)
- **10GB disk space** for initial deployment

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rebaker501/malsift.git
cd malsift
```

### 2. Configure Environment

```bash
# Copy the example environment file
cp backend/env.example backend/.env

# Edit the environment file with your configuration
nano backend/.env
```

### 3. Start the Application

```bash
# Make the startup script executable
chmod +x scripts/start.sh

# Start all services
./scripts/start.sh
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **API Documentation**: http://localhost:8000/docs
- **API Health Check**: http://localhost:8000/health
- **Grafana**: http://localhost:3001 (admin/admin)
- **Prometheus**: http://localhost:9090

## ⚙️ Configuration

### Environment Variables

Key configuration options in `backend/.env`:

```bash
# Database Configuration
DATABASE_URL=postgresql://threatintel:threatintel123@postgres:5432/cyber_threat_intel
REDIS_URL=redis://redis:6379

# API Configuration
API_KEY=your-secret-api-key
CORS_ORIGINS=["http://localhost:3000"]

# Threat Intelligence Sources
CISA_API_KEY=your-cisa-api-key
OTX_API_KEY=your-otx-api-key
VIRUSTOTAL_API_KEY=your-virustotal-api-key
THREATFOX_API_KEY=your-threatfox-api-key

# Rate Limiting
OTX_FREE_LIMIT=10
THREATFOX_FREE_LIMIT=5

# Dark Web Configuration
TOR_PROXY_URL=socks5://tor:9050
DARK_WEB_ENABLED=true
```

### Supported Threat Intelligence Sources

| Source | Type | Free Tier | API Key Required |
|--------|------|-----------|-------------------|
| CISA | Government | Yes | No |
| AlienVault OTX | Open Source | Yes | Yes |
| VirusTotal | Commercial | Yes | Yes |
| ThreatFox | Open Source | Yes | No |
| PhishTank | Open Source | Yes | No |
| URLhaus | Open Source | Yes | No |
| MISP | Open Source | Yes | No |

## 📊 API Usage

### Authentication

```bash
# Include API key in headers
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "http://localhost:8000/api/v1/indicators"
```

### Key Endpoints

```bash
# Get threat indicators
GET /api/v1/indicators

# Get indicators with filtering
GET /api/v1/indicators?indicator_type=ip&threat_level=high

# Create exclusion rule
POST /api/v1/exclusions
{
  "indicator_type": "ip",
  "value": "192.168.1.1",
  "pattern_type": "exact",
  "reason": "Internal network IP"
}

# Test exclusion pattern
POST /api/v1/exclusions/test?pattern=192.168.*.*&pattern_type=wildcard

# Fetch all feeds
POST /api/v1/feeds/fetch-all

# Get summary statistics
GET /api/v1/indicators/summary/stats
```

### Exclusion Patterns

```bash
# Exact match
{
  "indicator_type": "ip",
  "value": "192.168.1.1",
  "pattern_type": "exact"
}

# Wildcard pattern
{
  "indicator_type": "domain",
  "value": "*.example.com",
  "pattern_type": "wildcard"
}

# Regular expression
{
  "indicator_type": "ip",
  "value": "^192\\.168\\.1\\.\\d+$",
  "pattern_type": "regex"
}
```

## 🔧 Management Commands

```bash
# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Restart services
docker-compose restart

# Update and restart
docker-compose pull && docker-compose up -d

# Access database
docker-compose exec postgres psql -U threatintel -d cyber_threat_intel

# Run database migrations
docker-compose exec backend alembic upgrade head
```

## 📈 Monitoring

### Prometheus Metrics

- **Indicator Counts**: Total, by type, by threat level
- **Feed Performance**: Fetch duration, success rates, errors
- **API Usage**: Request counts, response times, errors
- **System Health**: Memory, CPU, disk usage

### Grafana Dashboards

Pre-configured dashboards for:
- Threat Intelligence Overview
- Feed Performance Metrics
- API Usage Analytics
- System Health Monitoring

## 🔒 Security Features

- **API Key Authentication**: Secure access to all endpoints
- **CORS Protection**: Configurable cross-origin restrictions
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Comprehensive request validation
- **SQL Injection Protection**: Parameterized queries
- **XSS Protection**: Output encoding and sanitization

## 🚀 Production Deployment

### AWS Deployment

1. **EC2 Setup**:
   ```bash
   # Launch EC2 instance with Docker
   sudo yum update -y
   sudo yum install -y docker
   sudo systemctl start docker
   sudo usermod -a -G docker ec2-user
   ```

2. **RDS Database**:
   ```bash
   # Create RDS PostgreSQL instance
   # Update DATABASE_URL in .env
   ```

3. **ElastiCache Redis**:
   ```bash
   # Create ElastiCache Redis cluster
   # Update REDIS_URL in .env
   ```

4. **Load Balancer**:
   ```bash
   # Configure ALB for frontend and API
   # Set up SSL certificates
   ```

### Docker Swarm Deployment

```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml malsift
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [API Docs](http://localhost:8000/docs)
- **Issues**: [GitHub Issues](https://github.com/rebaker501/malsift/issues)
- **Discussions**: [GitHub Discussions](https://github.com/rebaker501/malsift/discussions)

## 🙏 Acknowledgments

- FastAPI for the excellent web framework
- React and TypeScript for the frontend
- PostgreSQL and Redis for data storage
- All the threat intelligence providers for their APIs
- The cybersecurity community for feedback and contributions

---

**Malsift** - Empowering cybersecurity teams with comprehensive threat intelligence aggregation and management.
