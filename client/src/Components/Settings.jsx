import React, { useRef } from 'react';
import SentimentChart from './SentimentChart';
import RegionChart from './RegionChart';
import LeadTrendChart from './LeadTrendChart';
import RecentLeadsTable from './RecentLeadsTable';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Settings = () => {
  const reportRef = useRef();

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(reportRef.current, {
      scale: 2,
      useCORS: true,
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const ratio = canvas.width / canvas.height;
    const imgHeight = pageWidth / ratio;
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);
    pdf.save('CRM_Report.pdf');
  };

  return (
    <main style={{
      marginLeft: '240px',
      padding: '40px 20px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <div
        ref={reportRef}
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '30px',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
        }}
      >
        {/* Header */}
        <div style={{
          marginBottom: '30px',
          textAlign: 'center',
          borderBottom: '2px solid #ccc',
          paddingBottom: '10px',
        }}>
          <h2 style={{ margin: 0 }}>CRM Studio Report</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Generated on {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Highlights with icons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '40px',
        }}>
          {/* Top Region */}
          <div style={{
            flex: 1,
            backgroundColor: '#dfe6e9',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📍</div>
            Top Region<br />
            <span style={{ fontWeight: 'normal' }}>Mumbai</span>
          </div>

          {/* Common Sentiment */}
          <div style={{
            flex: 1,
            backgroundColor: '#dfe6e9',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>💬</div>
            Common Sentiment<br />
            <span style={{ fontWeight: 'normal' }}>Positive</span>
          </div>

          {/* Conversion Rate */}
          <div style={{
            flex: 1,
            backgroundColor: '#dfe6e9',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📈</div>
            Conversion Rate<br />
            <span style={{ fontWeight: 'normal' }}>42%</span>
          </div>
        </div>

        {/* Charts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          justifyItems: 'center',
        }}>
          <SentimentChart />
          <RegionChart />
          <LeadTrendChart />
        </div>

        {/* Table Section */}
        <div style={{
          marginTop: '50px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 0 6px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}></h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <RecentLeadsTable />
          </div>
        </div>

        {/* Footer Note */}
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#999',
          marginTop: '40px',
        }}>
          This report was auto-generated from CRM Studio.
        </p>
      </div>

      {/* PDF Button */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={handleDownloadPDF}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2ecc71',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Download PDF Report
        </button>
      </div>
    </main>
  );
};

export default Settings;