<?php
// Nur POST-Anfragen erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$message = trim($data['message'] ?? '');
$hp      = trim($data['website'] ?? ''); // Honeypot

// Honeypot: wenn ausgefüllt → Abbruch
if ($hp !== '') { echo json_encode(['ok' => true]); exit; }

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Bitte alle Felder ausfüllen.']);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Ungültige E-Mail-Adresse.']);
  exit;
}

// Empfänger-Adresse anpassen
$to   = 'kontakt@oezermedia.com';
$from = 'webform@oezermedia.com';

$subject = 'Neue Kontaktanfrage von ' . $name;

$headers  = 'From: '.$from."\r\n";
$headers .= 'Reply-To: '.$email."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body  = "Neue Kontaktanfrage\n\n";
$body .= "Name: $name\n";
$body .= "E-Mail: $email\n\n";
$body .= "Nachricht:\n$message\n";

$ok = @mail($to, $subject, $body, $headers);

if ($ok) echo json_encode(['ok' => true]);
else { http_response_code(500); echo json_encode(['ok' => false, 'error' => 'Senden fehlgeschlagen.']); }
