#!/bin/bash

# Cyber Threat Intelligence Platform Startup Script

set -e

echo "🚀 Starting Cyber Threat Intelligence Platform..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p logs
mkdir -p monitoring/grafana/dashboards
mkdir -p monitoring/grafana/datasources

# Copy environment file if it doesn't exist
if [ ! -f backend/.env ]; then
    echo "📝 Creating environment file..."
    cp backend/env.example backend/.env
    echo "⚠️  Please edit backend/.env with your configuration before starting."
fi

# Build and start services
echo "🐳 Building and starting Docker services..."
docker-compose up --build -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Check service health
echo "🏥 Checking service health..."

# Check backend
if curl -f http://localhost:8000/health > /dev/null 2>&1; then
    echo "✅ Backend API is running at http://localhost:8000"
else
    echo "❌ Backend API is not responding"
fi

# Check frontend
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Frontend is running at http://localhost:3000"
else
    echo "❌ Frontend is not responding"
fi

# Check Prometheus
if curl -f http://localhost:9090 > /dev/null 2>&1; then
    echo "✅ Prometheus is running at http://localhost:9090"
else
    echo "❌ Prometheus is not responding"
fi

# Check Grafana
if curl -f http://localhost:3001 > /dev/null 2>&1; then
    echo "✅ Grafana is running at http://localhost:3001"
else
    echo "❌ Grafana is not responding"
fi

echo ""
echo "🎉 Cyber Threat Intelligence Platform is now running!"
echo ""
echo "📊 Access Points:"
echo "   Frontend:     http://localhost:3000"
echo "   API Docs:     http://localhost:8000/docs"
echo "   API Health:   http://localhost:8000/health"
echo "   Prometheus:   http://localhost:9090"
echo "   Grafana:      http://localhost:3001 (admin/admin)"
echo ""
echo "🔧 Management Commands:"
echo "   View logs:    docker-compose logs -f"
echo "   Stop:         docker-compose down"
echo "   Restart:      docker-compose restart"
echo "   Update:       docker-compose pull && docker-compose up -d"
echo ""
echo "📚 Next Steps:"
echo "   1. Configure your threat intelligence sources in the web interface"
echo "   2. Add API keys for external services"
echo "   3. Configure dark web sources (if needed)"
echo "   4. Set up automated feed fetching schedules"
echo ""
echo "For more information, see the README.md file."
